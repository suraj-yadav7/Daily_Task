const conf={
    appwriteUrl:String(import.meta.emv.VITE_APPWRITE_URL),
    appwriteProjectId:String(import.meta.emv.VITE_APPWRITE_PROJECT_ID),
    appwriteDatabaseId: String(import.meta.emv.VITE_APPWRITE__DATABASE_ID),
    appwriteCollectionId: String(import.meta.emv.VITE_APPWRITE_COLLECTION_ID),
}
export default conf;