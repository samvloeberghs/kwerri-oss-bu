import { folder } from '../cache.config';

const fs = require('fs');

export class FileCacheStore {

  put(path: string, html: string) {
    this.saveFile(path, html);
  }

  get(path: string, callback: Function) {
    if (this.fileExists(path)) {
      this.readFile(path, callback);
    } else {
      callback(undefined);
    }
  }

  delete(path: string) {
    fs.unlinkSync(path);
    return true;
  }

  private fileExists(path: string): boolean {

    try {
      fs.accessSync(folder + '/' + path, fs.F_OK);
      return true;
    } catch (e) {
      return false;
    }

  }

  private readFile(path: string, callback: Function) {

    fs.readFile(folder + '/' + path, {encoding: 'utf-8'}, (err, data) => {
      if (err) {
        console.log(err);
        callback(undefined);
      }
      callback(data);

    });
  }

  private saveFile(path: string, html: string) {

    fs.writeFile(folder + '/' + path, html, {encoding: 'utf-8'}, (err) => {
      if (err) {
        return console.log(err);
      }
      console.log('The file was saved!');
    });

  }


}
