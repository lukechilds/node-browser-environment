import { jsdom } from 'jsdom';

const protectedproperties = (() => {
  const window = jsdom('<html><body></body></html>').defaultView;

  return Object
    .keys(window)
    .filter(prop => global[prop]);
})();

const getType = val => Object.prototype.toString.call(val);

module.exports = (...args) => {
  const properties = args.filter(arg => getType(arg) === '[object Array]')[0];
  const jsdomConfig = args.filter(arg => getType(arg) === '[object Object]')[0];

  const window = jsdom('<html><body></body></html>', jsdomConfig).defaultView;

  Object
    .keys(window)
    .filter(prop => protectedproperties.indexOf(prop) === -1)
    .filter(prop => !(properties && properties.indexOf(prop) === -1))
    .forEach(prop => global[prop] = window[prop]);

  return window;
};
