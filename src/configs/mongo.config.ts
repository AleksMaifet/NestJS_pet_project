import { ConfigService } from '@nestjs/config';

export const getMongoConfig = async (configService: ConfigService) => {
  return {
    uri: getMongoUri(configService),
  };
};

const getMongoUri = (configService: ConfigService) => {
  return configService.get('MONGO_URI');
};
