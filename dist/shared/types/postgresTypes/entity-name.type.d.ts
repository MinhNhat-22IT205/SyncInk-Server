import { ENTITY_NAME } from 'src/shared/constants/entity-name.constant';
export type EntityName = (typeof ENTITY_NAME)[keyof typeof ENTITY_NAME];
