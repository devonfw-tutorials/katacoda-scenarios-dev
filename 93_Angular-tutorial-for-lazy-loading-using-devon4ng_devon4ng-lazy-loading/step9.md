

Now when you check the terminal running the app, you could see the lazy loaded modules getting generated along with the main bundle. Also, if you check the Network tab in the developer tools, you could see the (lazy) modules getting loaded when needed. Since, `FirstModule` is the first path we visit, it is getting loaded at first only.

![compile-first-lazy.png](./assets/compile-first-lazy.png)

![first-lvl-lazy.png](./assets/first-lvl-lazy.png)



