module.exports = {
    globals:{
        "ts-jest":{
            "tsconfig": "tsconfig.json"
        }
    },
    moduleFileExtension:["ts","js"],
    transform:{
        "^.+\\.(ts|tsx)$": "ts-jest",
    },
    testMatch: ["**/test/**/*.test.(ts|js)"],
    testEnvironment:"node"
}
    
