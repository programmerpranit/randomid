export type GeneratorEntry = {
  /** Home page card title, e.g. "UUID v1" */
  name: string;
  /** Short label for nav dropdowns, e.g. "Version 1". Defaults to `name`. */
  navName?: string;
  href: string;
  /** Home page card subtitle */
  description: string;
  priority: number;
  changeFrequency: "daily" | "weekly" | "monthly";
};

export type GeneratorCategory = {
  key: string;
  /** Home page section heading, e.g. "Hash-based" */
  name: string;
  /** Nav dropdown label, e.g. "Hash". Defaults to `name`. */
  navLabel?: string;
  /** Home page section subtitle */
  description: string;
  /** Href the nav category link points to. Defaults to the first generator's href. */
  defaultHref?: string;
  generators: GeneratorEntry[];
};

export const generatorCategories: GeneratorCategory[] = [
  {
    key: "uuid",
    name: "UUID",
    description: "Universally Unique Identifiers",
    defaultHref: "/uuid/v4",
    generators: [
      { name: "UUID v1", navName: "Version 1", href: "/uuid/v1", description: "Time-based UUID", priority: 0.9, changeFrequency: "weekly" },
      { name: "UUID v2", navName: "Version 2", href: "/uuid/v2", description: "DCE Security UUID (rarely used)", priority: 0.9, changeFrequency: "weekly" },
      { name: "UUID v3", navName: "Version 3", href: "/uuid/v3", description: "Name-based (MD5)", priority: 0.9, changeFrequency: "weekly" },
      { name: "UUID v4", navName: "Version 4", href: "/uuid/v4", description: "Random UUID", priority: 0.9, changeFrequency: "weekly" },
      { name: "UUID v5", navName: "Version 5", href: "/uuid/v5", description: "Name-based (SHA-1)", priority: 0.9, changeFrequency: "weekly" },
      { name: "UUID v6", navName: "Version 6", href: "/uuid/v6", description: "Time-ordered UUID (draft)", priority: 0.9, changeFrequency: "weekly" },
      { name: "UUID v7", navName: "Version 7", href: "/uuid/v7", description: "Time-ordered UUID", priority: 0.9, changeFrequency: "weekly" },
      { name: "UUID v8", navName: "Version 8", href: "/uuid/v8", description: "Custom UUID", priority: 0.9, changeFrequency: "weekly" },
    ],
  },
  {
    key: "cuid",
    name: "CUID",
    description: "Collision-resistant Unique Identifiers",
    generators: [
      { name: "CUID", href: "/cuid", description: "Collision-resistant ID", priority: 0.8, changeFrequency: "weekly" },
      { name: "CUID2", href: "/cuid2", description: "Next-gen CUID", priority: 0.8, changeFrequency: "weekly" },
    ],
  },
  {
    key: "nanoid",
    name: "NanoID",
    description: "Small, URL-safe unique string IDs",
    defaultHref: "/nanoid-sync",
    generators: [
      { name: "NanoID", navName: "Standard", href: "/nanoid", description: "URL-safe unique ID", priority: 0.8, changeFrequency: "weekly" },
      { name: "NanoID Sync", navName: "Sync", href: "/nanoid-sync", description: "Synchronous generation", priority: 0.8, changeFrequency: "weekly" },
      { name: "NanoID Async", navName: "Async", href: "/nanoid-async", description: "Asynchronous generation", priority: 0.8, changeFrequency: "weekly" },
      { name: "NanoID Custom", navName: "Custom", href: "/nanoid-custom", description: "Custom alphabet & length", priority: 0.8, changeFrequency: "weekly" },
    ],
  },
  {
    key: "hash",
    name: "Hash-based",
    navLabel: "Hash",
    description: "Hash-based random identifiers",
    defaultHref: "/sha256",
    generators: [
      { name: "SHA-1", href: "/sha1", description: "SHA-1 hash ID", priority: 0.7, changeFrequency: "weekly" },
      { name: "SHA-256", href: "/sha256", description: "SHA-256 hash ID", priority: 0.7, changeFrequency: "weekly" },
      { name: "SHA-512", href: "/sha512", description: "SHA-512 hash ID", priority: 0.7, changeFrequency: "weekly" },
      { name: "Blake2", href: "/blake2", description: "Blake2 hash ID", priority: 0.7, changeFrequency: "weekly" },
      { name: "MD5", href: "/md5", description: "MD5 hash ID", priority: 0.7, changeFrequency: "weekly" },
    ],
  },
  {
    key: "base",
    name: "Base-encoded",
    navLabel: "Base",
    description: "Base-encoded random identifiers",
    defaultHref: "/base64",
    generators: [
      { name: "Hex", href: "/hex", description: "Hexadecimal ID", priority: 0.7, changeFrequency: "weekly" },
      { name: "Base32", href: "/base32", description: "Base32 encoded ID", priority: 0.7, changeFrequency: "weekly" },
      { name: "Base36", href: "/base36", description: "Base36 encoded ID", priority: 0.7, changeFrequency: "weekly" },
      { name: "Base58", href: "/base58", description: "Base58 encoded ID", priority: 0.7, changeFrequency: "weekly" },
      { name: "Base62", href: "/base62", description: "Base62 encoded ID", priority: 0.7, changeFrequency: "weekly" },
      { name: "Base64", href: "/base64", description: "Base64 encoded ID", priority: 0.7, changeFrequency: "weekly" },
      { name: "Base64URL", href: "/base64url", description: "Base64URL encoded ID", priority: 0.7, changeFrequency: "weekly" },
    ],
  },
  {
    key: "human",
    name: "Human-readable",
    navLabel: "Human",
    description: "Human-readable identifier formats",
    generators: [
      { name: "Petname", href: "/petname", description: "Pet name identifier", priority: 0.7, changeFrequency: "weekly" },
      { name: "Haikunator", href: "/haikunator", description: "Haiku-style names", priority: 0.7, changeFrequency: "weekly" },
      { name: "2-Word", href: "/word2", description: "Two-word combination", priority: 0.7, changeFrequency: "weekly" },
      { name: "3-Word", href: "/word3", description: "Three-word combination", priority: 0.7, changeFrequency: "weekly" },
    ],
  },
  {
    key: "other",
    name: "Other Formats",
    navLabel: "Others",
    description: "Additional unique identifier formats",
    generators: [
      { name: "GUID", href: "/guid", description: "Globally Unique Identifier", priority: 0.7, changeFrequency: "weekly" },
      { name: "ULID", href: "/ulid", description: "Lexicographically sortable ID", priority: 0.7, changeFrequency: "weekly" },
      { name: "KSUID", href: "/ksuid", description: "K-Sortable Unique ID", priority: 0.7, changeFrequency: "weekly" },
      { name: "Snowflake", href: "/snowflake", description: "Twitter Snowflake ID", priority: 0.7, changeFrequency: "weekly" },
      { name: "ShortUUID", href: "/shortuuid", description: "Short UUID format", priority: 0.7, changeFrequency: "weekly" },
      { name: "ShortID", href: "/shortid", description: "Short unique identifier", priority: 0.7, changeFrequency: "weekly" },
      { name: "Crypto Random", navName: "Crypto", href: "/crypto-random", description: "Cryptographic random bytes", priority: 0.7, changeFrequency: "weekly" },
      { name: "Timestamp", href: "/random-timestamp", description: "Random timestamp ID", priority: 0.7, changeFrequency: "weekly" },
      { name: "Sequence", href: "/random-sequence", description: "Random sequence ID", priority: 0.7, changeFrequency: "weekly" },
      { name: "Prefixed", href: "/prefixed", description: "Prefixed identifier", priority: 0.7, changeFrequency: "weekly" },
      { name: "Suffixed", href: "/suffixed", description: "Suffixed identifier", priority: 0.7, changeFrequency: "weekly" },
    ],
  },
];

export const allGenerators: GeneratorEntry[] = generatorCategories.flatMap(
  (category) => category.generators
);
