import service from '@/service/interceptor';
import API from '@/service/api';

export const getMyPeddingPreview = async (params: any) => {
  return await service.get(API.MY_PEDDING_PREVIEW, params);
}