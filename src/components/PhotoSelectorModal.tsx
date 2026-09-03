import React, { useRef, useState } from 'react';
import { X, Upload, Check, RotateCcw, Image as ImageIcon, Camera } from 'lucide-react';
import outdoorPhoto from '../assets/images/rishabh_mehra_profile_portrait_1788426701339.jpg';
import poloPhoto from '../assets/images/rishabh_profile_photo_1788426292289.jpg';
import suitPhoto from '../assets/images/rishabh_executive_1788425899843.jpg';

export interface PhotoOption {
  id: string;
  name: string;
  description: string;
  url: string;
}

export const PRESET_PHOTOS: PhotoOption[] = [
  {
    id: 'outdoor-maroon',
    name: 'Mountain Lawn & Maroon Kurta',
    description: 'Outdoor setting with pine trees and maroon mandarin collar shirt',
    url: outdoorPhoto,
  },
  {
    id: 'polo-casual',
    name: 'Botanical Print Polo',
    description: 'Warm cafe ambiance with patterned white polo shirt',
    url: poloPhoto,
  },
  {
    id: 'executive-suit',
    name: 'Corporate Studio Blazer',
    description: 'Formal navy blue suit headshot',
    url: suitPhoto,
  },
];

export const DEFAULT_PROFILE_PHOTO = outdoorPhoto;

interface PhotoSelectorModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentPhoto: string;
  onSelectPhoto: (photoUrl: string) => void;
}

export const PhotoSelectorModal: React.FC<PhotoSelectorModalProps> = ({
  isOpen,
  onClose,
  currentPhoto,
  onSelectPhoto,
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [uploadError, setUploadError] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      setUploadError('Please select a valid image file (JPG, PNG, WebP).');
      return;
    }

    if (file.size > 10 * 1024 * 1024) {
      setUploadError('Image size is too large (max 10MB).');
      return;
    }

    setUploadError(null);
    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === 'string') {
        onSelectPhoto(reader.result);
      }
    };
    reader.readAsDataURL(file);
  };

  const handleReset = () => {
    onSelectPhoto(DEFAULT_PROFILE_PHOTO);
    setUploadError(null);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div
        className="relative w-full max-w-lg bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 dark:border-slate-800">
          <div className="flex items-center gap-2">
            <Camera className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
              Profile Picture
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            title="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6 max-h-[80vh] overflow-y-auto">
          {/* Active Preview */}
          <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/70 dark:border-slate-700/60">
            <img
              src={currentPhoto}
              alt="Current Profile"
              className="w-20 h-20 rounded-xl object-cover ring-2 ring-blue-500 shadow-md"
              referrerPolicy="no-referrer"
            />
            <div className="flex-1 min-w-0">
              <span className="text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                Active Profile Photo
              </span>
              <p className="text-sm font-medium text-slate-800 dark:text-slate-200 mt-0.5">
                Displayed across website hero card & downloadable CV
              </p>
            </div>
          </div>

          {/* Upload Direct Photo File */}
          <div className="space-y-2">
            <label className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              Upload Exact Photo From Your Device
            </label>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="hidden"
            />
            <button
              onClick={() => fileInputRef.current?.click()}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 border-2 border-dashed border-blue-400 dark:border-blue-600/70 hover:border-blue-600 dark:hover:border-blue-400 rounded-xl bg-blue-50/50 hover:bg-blue-50 dark:bg-blue-950/20 dark:hover:bg-blue-950/40 text-blue-700 dark:text-blue-300 font-medium text-sm transition-all"
            >
              <Upload className="w-4 h-4" />
              <span>Choose Photo from Device / Gallery (JPG, PNG)</span>
            </button>
            {uploadError && (
              <p className="text-xs text-rose-500 font-medium mt-1">{uploadError}</p>
            )}
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Upload any photo directly. Your choice is saved and persists in your browser.
            </p>
          </div>

          {/* Preset Options */}
          <div className="space-y-2">
            <label className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              Or Choose Preset Portrait Style
            </label>
            <div className="grid grid-cols-1 gap-2.5">
              {PRESET_PHOTOS.map((preset) => {
                const isSelected = currentPhoto === preset.url;
                return (
                  <button
                    key={preset.id}
                    onClick={() => onSelectPhoto(preset.url)}
                    className={`flex items-center gap-3 p-2.5 rounded-xl border text-left transition-all ${
                      isSelected
                        ? 'border-blue-500 bg-blue-50/80 dark:bg-blue-950/40 ring-1 ring-blue-500'
                        : 'border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 bg-white dark:bg-slate-800/40'
                    }`}
                  >
                    <img
                      src={preset.url}
                      alt={preset.name}
                      className="w-12 h-12 rounded-lg object-cover shadow-sm flex-shrink-0"
                      referrerPolicy="no-referrer"
                    />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-semibold text-slate-900 dark:text-white truncate">
                          {preset.name}
                        </span>
                        {isSelected && (
                          <Check className="w-4 h-4 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                        )}
                      </div>
                      <p className="text-xs text-slate-500 dark:text-slate-400 truncate">
                        {preset.description}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="flex items-center justify-between px-6 py-4 border-t border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50">
          <button
            onClick={handleReset}
            className="flex items-center gap-1.5 text-xs font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset to Default</span>
          </button>
          <button
            onClick={onClose}
            className="px-4 py-2 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-sm transition-colors"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};
