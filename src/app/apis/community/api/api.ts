export * from './communityController.service';
import { CommunityControllerService } from './communityController.service';
export * from './communityController.serviceInterface';
export * from './invitationController.service';
import { InvitationControllerService } from './invitationController.service';
export * from './invitationController.serviceInterface';
export const APIS = [CommunityControllerService, InvitationControllerService];
