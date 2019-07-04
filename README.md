# Monorepo Kwerri OSS

## Projects

- https://samvloeberghs.be
- https://social-share-check.app
- [ngx-seo](https://www.npmjs.com/package/ngx-seo) (better meta tags & json ld library)
- sw learnings example application

## Angular CLI

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.3.

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

### samvloeberghs.be

#### Server config stuff
(not working fully at the moment)

```
sudo iptables -t nat -A PREROUTING -p tcp --dport 80 -j REDIRECT --to-port 20080
sudo iptables -t nat -I OUTPUT -p tcp -o -lo --dport 80 -j REDIRECT --to-port 20080
sudo iptables -t nat -A PREROUTING -p tcp --dport 443 -j REDIRECT --to-port 20443
sudo iptables -t nat -I OUTPUT -p tcp -o -lo --dport 443 -j REDIRECT --to-port 20433
sudo apt-get install iptables-persistent
iptables-save > /etc/iptables/rules.v4
iptables -t nat -F
```
