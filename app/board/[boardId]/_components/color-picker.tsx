"use client";

import { colorToCss } from "@/lib/utils";
import { Color } from "@/types/canvas";

interface ColorPickerProps {
  onChange: (color: Color) => void;
}

export const ColorPicker = ({ onChange }: ColorPickerProps) => {
  return (
    <div className='flex flex-wrap gap-2 items-center max-w-[164px] pr-2 border-r border-neutral-200'>
      <ColorButton
        color={{
          r: 232,
          g: 82,
          b: 35,
        }}
        onClick={onChange}
      />
      <ColorButton
        color={{
          r: 199,
          g: 172,
          b: 35,
        }}
        onClick={onChange}
      />
      <ColorButton
        color={{
          r: 232,
          g: 82,
          b: 35,
        }}
        onClick={onChange}
      />
      <ColorButton
        color={{
          r: 61,
          g: 82,
          b: 35,
        }}
        onClick={onChange}
      />
      <ColorButton
        color={{
          r: 232,
          g: 82,
          b: 35,
        }}
        onClick={onChange}
      />
      <ColorButton
        color={{
          r: 62,
          g: 63,
          b: 62,
        }}
        onClick={onChange}
      />
      <ColorButton
        color={{
          r: 203,
          g: 203,
          b: 203,
        }}
        onClick={onChange}
      />
      <ColorButton
        color={{
          r: 38,
          g: 156,
          b: 183,
        }}
        onClick={onChange}
      />
      <ColorButton
        color={{
          r: 105,
          g: 38,
          b: 183,
        }}
        onClick={onChange}
      />
      <ColorButton
        color={{
          r: 183,
          g: 38,
          b: 130,
        }}
        onClick={onChange}
      />
      <ColorButton
        color={{
          r: 170,
          g: 54,
          b: 54,
        }}
        onClick={onChange}
      />
      <ColorButton
        color={{
          r: 67,
          g: 164,
          b: 53,
        }}
        onClick={onChange}
      />
    </div>
  );
};

interface ColorButtonProps {
  onClick: (color: Color) => void;
  color: Color;
}

const ColorButton = ({ onClick, color }: ColorButtonProps) => {
  return (
    <button
      className='w-8 h-8 items-center flex justify-center hover:opacity-75 transition'
      onClick={() => onClick(color)}>
      <div
        className='h-8 w-8 rounded-md border-neutral-300'
        style={{
          background: colorToCss(color),
        }}
      />
    </button>
  );
};
