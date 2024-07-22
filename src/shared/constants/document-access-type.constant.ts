import { $Enums } from '@prisma/client';

export const DOCUMENT_ACCESS_TYPE: Record<$Enums.AccessType, string> = {
  EDITABLE: 'EDITABLE',
  VIEWABLE: 'VIEWABLE',
  RESTRICTED: 'RESTRICTED',
};
