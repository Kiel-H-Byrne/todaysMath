const withOffline = require("next-offline");
const withSass = require("@zeit/next-sass");

// nextConfig = {
//   cssModules: true,
//   cssLoaderOptions: {
//     importLoaders: 1,
//     localIdentName: "[local]___[hash:base64:5]"
//   },
//   target: "serverless",
//   workboxOpts: {
//     swDest: "static/service-worker.js",
//     runtimeCaching: [
//       {
//         urlPattern: /^https?.*/,
//         handler: "NetworkFirst",
//         options: {
//           cacheName: "https-calls",
//           networkTimeoutSeconds: 15,
//           expiration: {
//             maxEntries: 150,
//             maxAgeSeconds: 30 * 24 * 60 * 60 // 1 month
//           },
//           cacheableResponse: {
//             statuses: [0, 200]
//           }
//         }
//       }
//     ]
//   },
//   transformManifest: manifest => ["/"].concat(manifest),
//   webpack: (config, options) => {
//     if (!options.isServer) {
//       config.optimization.splitChunks = { minChunks: 2 };
//     }
//     // Fixes npm packages that depend on `fs` module
//     config.node = {
//       fs: "empty"
//     };
//     config.module.rules.push({
//       test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
//       use: {
//         loader: "url-loader",
//         options: {
//           limit: 100000
//         }
//       }
//     });

//     return config;
//   }
// };

const withAssetRelocator = (
  nextConfig = {
    cssModules: true,
    cssLoaderOptions: {
      importLoaders: 1,
      localIdentName: "[local]___[hash:base64:5]"
    }
  }
) => {
  return Object.assign({}, nextConfig, {
    webpack(config, options) {
      const { isServer } = options;

      if (isServer) {
        config.node = Object.assign({}, config.node, {
          __dirname: false,
          __filename: false
        });

        config.module.rules.unshift({
          test: /\.(m?js|node)$/,
          parser: { amd: false },
          use: {
            loader: "@zeit/webpack-asset-relocator-loader",
            options: {
              outputAssetBase: "assets",
              existingAssetNames: [],
              wrapperCompatibility: true,
              escapeNonAnalyzableRequires: true
            }
          }
        });
      }

      if (typeof nextConfig.webpack === "function") {
        return nextConfig.webpack(config, options);
      }
      return config;
    }
  });
};

module.exports = withAssetRelocator(withSass());
