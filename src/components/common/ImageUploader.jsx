import React, { useState, useEffect } from "react";
import { FiUpload } from "react-icons/fi";
import { perfectImageReturn } from "../../utils/optimizationFunction";

function ImageUploader({ fallback = "https://placehold.co/400", onChange, initialImage, image, setImage }) {
    const [preview, setPreview] = useState(fallback);

    useEffect(() => {
        if (image) {
            const url = perfectImageReturn(image, fallback);
            setPreview(url);
            return () => {
                if (image instanceof File) {
                    URL.revokeObjectURL(url);
                }
            };
        } else if (initialImage) {
            const url = perfectImageReturn(initialImage, fallback);
            setPreview(url);
        } else {
            setPreview(fallback);
        }
    }, [image, fallback, initialImage]);

    return (
        <div className="flex flex-col items-center gap-4">
            <div className="relative w-32 h-32">
                <img
                    src={preview}
                    alt=""
                    className="w-full opacity-85 border shadow rounded-full h-full object-cover"
                />
                <label className="absolute right-0 bottom-0 z-[999] text-white w-10 h-10 bg-transparent flex items-center justify-center">
                    <FiUpload className="h-10 w-10 cursor-pointer bg-white text-black p-2 rounded-full" />
                    <input
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={(e) => {
                            const file = e.target.files[0];
                            if (file) {
                                setImage(file);
                                onChange?.(file);
                            }
                        }}
                    />
                </label>
            </div>
        </div>
    );
}

export default ImageUploader;
