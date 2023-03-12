
const REACT_APP = /^REACT_APP_/i;
process.env = {
    REACT_APP_name:'REACT_APP_name',
    APPDATA: 'C:\\Users\\83687\\AppData\\Roaming',
}
function getClientEnvironment(publicUrl) {
    const raw = Object.keys(process.env)
      .filter(key => REACT_APP.test(key))
      .reduce(
        (env, key) => {
          env[key] = process.env[key];
          return env;
        },
        {
          // Useful for determining whether we’re running in production mode.
          // Most importantly, it switches React into the correct mode.
          NODE_ENV: process.env.NODE_ENV || 'development',
          // Useful for resolving the correct path to static assets in `public`.
          // For example, <img src={process.env.PUBLIC_URL + '/img/logo.png'} />.
          // This should only be used as an escape hatch. Normally you would put
          // images into the `src` and `import` them in code to get their paths.
          PUBLIC_URL: publicUrl,//资源访问路径的前缀
          // We support configuring the sockjs pathname during development.
          // These settings let a developer run multiple simultaneous projects.
          // They are used as the connection `hostname`, `pathname` and `port`
          // in webpackHotDevClient. They are used as the `sockHost`, `sockPath`
          // and `sockPort` options in webpack-dev-server.
          //热更新的时候用，像指热更新主机
          WDS_SOCKET_HOST: process.env.WDS_SOCKET_HOST,
          WDS_SOCKET_PATH: process.env.WDS_SOCKET_PATH,
          WDS_SOCKET_PORT: process.env.WDS_SOCKET_PORT,
          // Whether or not react-refresh is enabled.
          // react-refresh is not 100% stable at this time,
          // which is why it's disabled by default.
          // It is defined here so it is available in the webpackHotDevClient.
          FAST_REFRESH: process.env.FAST_REFRESH !== 'false',
        }
      );
    // Stringify all values so we can feed into webpack DefinePlugin
    const stringified = {
      'process.env': Object.keys(raw).reduce((env, key) => {
        env[key] = JSON.stringify(raw[key]);
        return env;
      }, {}),
    };
  
    return { raw, stringified };
  }

  console.log(getClientEnvironment('/'));