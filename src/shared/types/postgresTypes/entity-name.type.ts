import { ENTITY_NAME } from 'src/shared/constants/entity-name.constant';

//DEPRECATED
export type EntityName = (typeof ENTITY_NAME)[keyof typeof ENTITY_NAME];
