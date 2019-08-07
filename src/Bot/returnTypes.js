/* @flow */

/* :: import * as t from './generated' */

export type GetUpdatesResult = $ReadOnlyArray<t.Update>
export type SetWebhookResult = true
export type DeleteWebhookResult = true
export type GetWebhookInfoResult = t.WebhookInfo
export type GetMeResult = t.User
export type SendMessageResult = t.Message
export type ForwardMessageResult = t.Message
export type SendPhotoResult = t.Message
export type SendAudioResult = t.Message
export type SendDocumentResult = t.Message
export type SendVideoResult = t.Message
export type SendAnimationResult = t.Message
export type SendVoiceResult = t.Message
export type SendVideoNoteResult = t.Message
export type SendMediaGroupResult = $ReadOnlyArray<t.Message>
export type SendLocationResult = t.Message
export type EditMessageLiveLocationResult = t.Message | true
export type StopMessageLiveLocationResult = t.Message | true
export type SendVenueResult = t.Message
export type SendContactResult = t.Message
export type SendChatActionResult = true
export type GetUserProfilePhotosResult = t.UserProfilePhotos
export type GetFileResult = t.File
export type KickChatMemberResult = true
export type UnbanChatMemberResult = true
export type RestrictChatMemberResult = true
export type PromoteChatMemberResult = true
export type ExportChatInviteLinkResult = string
export type SetChatPhotoResult = true
export type DeleteChatPhotoResult = true
export type SetChatTitleResult = true
export type SetChatDescriptionResult = true
export type PinChatMessageResult = true
export type UnpinChatMessageResult = true
export type LeaveChatResult = true
export type GetChatResult = t.Chat
export type GetChatAdministratorsResult = $ReadOnlyArray<t.ChatMember>
export type GetChatMembersCountResult = number
export type GetChatMemberResult = t.ChatMember
export type SetChatStickerSetResult = true
export type DeleteChatStickerSetResult = true
export type AnswerCallbackQueryResult = true
export type EditMessageTextResult = t.Message | true
export type EditMessageCaptionResult = t.Message | true
export type EditMessageMediaResult = t.Message | true
export type EditMessageReplyMarkupResult = t.Message | true
export type DeleteMessageResult = true
export type SendStickerResult = t.Message
export type GetStickerSetResult = t.StickerSet
export type UploadStickerFileResult = t.File
export type CreateNewStickerSetResult = true
export type AddStickerToSetResult = true
export type SetStickerPositionInSetResult = true
export type DeleteStickerFromSetResult = true
export type AnswerInlineQueryResult = true
export type SendInvoiceResult = t.Message
export type AnswerShippingQueryResult = true
export type AnswerPreCheckoutQueryResult = true
export type SetPassportDataErrorsResult = true
export type SendGameResult = t.Message
export type SetGameScoreResult = t.Message
export type GetGameHighScoresResult = $ReadOnlyArray<t.GameHighScore>
