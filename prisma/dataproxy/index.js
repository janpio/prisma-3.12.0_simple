
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  decompressFromBase64,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  Decimal
} = require('./runtime/proxy')


const Prisma = {}

exports.Prisma = Prisma

/**
 * Prisma Client JS version: 3.12.0
 * Query Engine version: 22b822189f46ef0dc5c5b503368d1bee01213980
 */
Prisma.prismaVersion = {
  client: "3.12.0",
  engine: "22b822189f46ef0dc5c5b503368d1bee01213980"
}

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = () => (val) => val

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = 'DbNull'
Prisma.JsonNull = 'JsonNull'
Prisma.AnyNull = 'AnyNull'


const dirname = '/'
/**
 * Enums
 */
// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275
function makeEnum(x) { return x; }

exports.Prisma.FooScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name'
});

exports.Prisma.SortOrder = makeEnum({
  asc: 'asc',
  desc: 'desc'
});

exports.Prisma.QueryMode = makeEnum({
  default: 'default',
  insensitive: 'insensitive'
});


exports.Prisma.ModelName = makeEnum({
  Foo: 'Foo'
});

const compressedDMMF = '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'
const decompressedDMMF = decompressFromBase64(compressedDMMF)
// We are parsing 2 times, as we want independent objects, because
// DMMFClass introduces circular references in the dmmf object
const dmmf = JSON.parse(decompressedDMMF)
exports.Prisma.dmmf = JSON.parse(decompressedDMMF)

/**
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "C:\\Users\\Jan\\Documents\\throwaway\\3.12.0_simple\\prisma\\dataproxy",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "dataproxy"
    },
    "binaryTargets": [],
    "previewFeatures": [
      "dataProxy"
    ],
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": "..\\..\\.env",
    "schemaEnvPath": "..\\..\\.env"
  },
  "relativePath": "..",
  "clientVersion": "3.12.0",
  "engineVersion": "22b822189f46ef0dc5c5b503368d1bee01213980",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "mongodb"
}
config.document = dmmf
config.dirname = dirname

config.inlineDatasources = {
  "db": {
    "url": {
      "fromEnvVar": "DATABASE_URL",
      "value": null
    }
  }
}

config.inlineSchema = 'Ly8gVGhpcyBpcyB5b3VyIFByaXNtYSBzY2hlbWEgZmlsZSwKLy8gbGVhcm4gbW9yZSBhYm91dCBpdCBpbiB0aGUgZG9jczogaHR0cHM6Ly9wcmlzLmx5L2QvcHJpc21hLXNjaGVtYQoKZ2VuZXJhdG9yIGNsaWVudCB7CiAgcHJvdmlkZXIgICAgICAgID0gInByaXNtYS1jbGllbnQtanMiCiAgcHJldmlld0ZlYXR1cmVzID0gWyJkYXRhUHJveHkiXQogIGVuZ2luZVR5cGUgICAgICA9ICJkYXRhcHJveHkiCiAgb3V0cHV0ICAgICAgICAgID0gImRhdGFwcm94eSIKCn0KCmdlbmVyYXRvciBjbGllbnQyIHsKICBwcm92aWRlciA9ICJwcmlzbWEtY2xpZW50LWpzIgogIG91dHB1dCAgID0gImxpYnJhcnkiCn0KCmRhdGFzb3VyY2UgZGIgewogIHByb3ZpZGVyID0gIm1vbmdvZGIiCiAgdXJsICAgICAgPSBlbnYoIkRBVEFCQVNFX1VSTCIpCn0KCm1vZGVsIEZvbyB7CiAgaWQgICBTdHJpbmcgQGlkIEBtYXAoIl9pZCIpIEBkYi5PYmplY3RJZAogIG5hbWUgU3RyaW5nCn0K'
config.inlineSchemaHash = '11e52bd7ecad95f9f3809fd9d8fec1533840f048c3c245ce8b703d8ff19d2fb3'

config.inlineEnv = {
  parsed: {
    DATABASE_URL: typeof global !== 'undefined' && global['DATABASE_URL'] || process.env['DATABASE_URL'] || 'prisma://aws-us-east-1.prisma-data.com/?api_key=A2ahPkfCzF-OYyQE2NbVdxlO2GqjHucw43ktQTKvAIjaZbidZkgBxtO2fZ0tBBmp'
  }
}

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

