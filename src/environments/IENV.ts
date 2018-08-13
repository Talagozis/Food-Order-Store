interface IENV {
	mode: Mode;
	
	IMAGE_URL: string;

	API_HEADER_NAME: string;
	API_HEADER_VALUE: string;
	API_URL: string;

	RPC_HEADER_NAME: string;
	RPC_HEADER_VALUE: string;
	RPC_URL: string;

	GOOGLE_ANALYTICS_TRACKING_ID: string;
}

export enum Mode {
	Development = 1,
	Production = 2,
}