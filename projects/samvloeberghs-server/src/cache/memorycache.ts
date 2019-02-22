const memory = require('memory-cache');

export class MemoryCacheStore {

  put(path: string, html: string) {
    memory.put(path, html);
  }

  get(path: string, callback: Function) {
    const entry = memory.get(path);
    if (entry) {
      callback(entry);
    } else {
      callback(undefined);
    }
  }

  delete(path: string): boolean {
    return memory.del(path);
  }

}
