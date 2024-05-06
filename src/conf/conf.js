const conf = {
  appwriteUrl: import.meta.env.VITE_APPWRITE_URL || "",
  appwriteProjectId: import.meta.env.VITE_APPWRITE_PROJECT_ID || "",
  appwriteDatabaseId: import.meta.env.VITE_APPWRITE_DATABASE_ID || "",
  appwriteCollectionId: import.meta.env.VITE_APPWRITE_COLLECTION_ID || "",
  appwriteBucketId: import.meta.env.VITE_APPWRITE_BUCKET_ID || "",
};

// Optional: Validate configuration values
const validateConf = () => {
  const requiredProps = [
    "appwriteUrl",
    "appwriteProjectId",
    "appwriteDatabaseId",
    "appwriteCollectionId",
    "appwriteBucketId",
  ];
  const missingProps = requiredProps.filter((prop) => !conf[prop]);

  if (missingProps.length > 0) {
    console.error(
      `Missing configuration properties: ${missingProps.join(", ")}`
    );
    throw new Error("Missing required configuration properties");
  }
};

validateConf();

export default conf;
