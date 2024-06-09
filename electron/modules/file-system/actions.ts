import fs from 'fs';
import ini from 'ini';
import path from 'path';
import { readFile, writeFileSync, existsSync, unlinkSync, open } from 'fs';

export type ListenConfig = { every: number };

// export type ListenCallback = (err: Error | null, file: number) => void;
export type ListenCallback = (err: NodeJS.ErrnoException | null, data: Buffer) => void;

export type SaveFile = {
  path: string;
  content: string | object;
  filename: string;
};

export type SaveIniFile = SaveFile & { section: string };

export const deleteFile = async (file: string) => (!existsSync(file) ? null : unlinkSync(file));

export const saveFile = async (payload: SaveFile) => {
  const filepath = path.join(payload.path, payload.filename);

  try {
    if (!fs.existsSync(path.dirname(filepath))) {
      fs.mkdirSync(path.dirname(filepath), { recursive: true });
    }

    writeFileSync(filepath, payload.content as string, { encoding: 'utf-8', mode: 0o777 });

    return Promise.resolve();
  } catch (error) {
    return Promise.reject(error);
  }
};

export const saveIniFile = async (payload: SaveIniFile) => {
  const filepath = path.join(payload.path, payload.filename);

  try {
    if (!fs.existsSync(path.dirname(filepath))) {
      fs.mkdirSync(path.dirname(filepath));
    }

    const { content, section } = payload;
    const iniContent = ini.stringify(content, { section });

    writeFileSync(filepath, iniContent, { encoding: 'utf-8' });

    return Promise.resolve();
  } catch (error) {
    return Promise.reject(error);
  }
};

export const listenFile = (
  path: string,
  config: ListenConfig = { every: 200 },
  cb: ListenCallback
) => setInterval(() => readFile(path, null, cb), config.every);
