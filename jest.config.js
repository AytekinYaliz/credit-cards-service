module.exports = {
   moduleFileExtensions: ["ts", "js"],
   transform: {
      "^.+\\.js$": "babel-jest"
   },
   transformIgnorePatterns: ["[/\\\\]node_modules[/\\\\].+\\.(js|jsx)$"],
   testMatch: ["**/test/**/*.(test|spec).(ts|js)"],
   testEnvironment: "node",

   collectCoverageFrom: ["src/**/*.{ts|js}"],
   verbose: true
};
