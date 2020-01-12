module.exports = {
    "schema": [
        {
            "http://localhost:4000/graphql": {}
        }
    ],
    "documents": [
        "./graphql/**/*.tsx",
        "./graphql/**/*.ts"
    ],
    "overwrite": true,
    "generates": {
        "./graphql/generated/index.tsx": {
            "plugins": [
                "typescript",
                "typescript-operations",
                "typescript-react-apollo"
            ],
            "config": {
              "skipTypename": false,
              "withHooks": true,
              "withHOC": false,
              "withComponent": true
            } 
        },
        "./graphql.schema.json": {
          "plugins": [
                "introspection"
          ]
        }
    }
};