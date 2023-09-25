# HOW CONFIG LIBRARY ?
**Read the comments to the right of the constancy in the first paragraph, all parameter its present here !**
```js
const interval_new_irl_info = 1000
const msg_get = 5
```

# HOW USE FUNCTION ?

## function SendMessage

```js
SendMessage("Hello world !",url_info.channel_id);
//
```

<img title="function SendMessage" alt="Alt text" src="/Image/SDMSG.png">

## function GetGuildInfo

```js
GetGuildInfo(url_info.guild_id).then(guildData => console.log(guildData));
//
```
The contents of guildData:
```js
{
    "id": "1234567890",
    "name": "TEST",
    "icon": null,
    "description": null,
    "home_header": null,
    "splash": null,
    "discovery_splash": null,
    "features": [
        "COMMUNITY",
        "NEWS"
    ],
    "banner": null,
    "owner_id": "1234567890",
    "application_id": null,
    "region": "india",
    "afk_channel_id": null,
    "afk_timeout": 300,
    "system_channel_id": "1234567890",
    "system_channel_flags": 15,
    "widget_enabled": false,
    "widget_channel_id": null,
    "verification_level": 1,
    "roles": [
        {
            "id": "1234567890",
            "name": "@everyone",
            "description": null,
            "permissions": "1234567890",
            "position": 0,
            "color": 0,
            "hoist": false,
            "managed": false,
            "mentionable": false,
            "icon": null,
            "unicode_emoji": null,
            "flags": 0
        }
    ],
    "default_message_notifications": 1,
    "mfa_level": 0,
    "explicit_content_filter": 2,
    "max_presences": null,
    "max_members": 500000,
    "max_stage_video_channel_users": 50,
    "max_video_channel_users": 25,
    "vanity_url_code": null,
    "premium_tier": 0,
    "premium_subscription_count": 0,
    "preferred_locale": "en-US",
    "rules_channel_id": "1234567890",
    "safety_alerts_channel_id": null,
    "public_updates_channel_id": "1234567890",
    "hub_type": null,
    "premium_progress_bar_enabled": false,
    "latest_onboarding_question_id": null,
    "nsfw": false,
    "nsfw_level": 0,
    "emojis": [],
    "stickers": [],
    "incidents_data": null,
    "inventory_settings": null,
    "embed_enabled": false,
    "embed_channel_id": null
}
```

## event OnMessage

```js
document.addEventListener('OnMessage', function(e) {
    console.log(e.detail.message);
});
```
The contents of the return object:
```js
{
    "id": "1234567890",
    "type": 0,
    "content": "Hello world !",
    "channel_id": "1234567890",
    "author": {
        "id": "1234567890",
        "username": "axiom.dev",
        "avatar": "1234567890",
        "discriminator": "0",
        "public_flags": 1234567890,
        "flags": 1234567890,
        "banner": null,
        "accent_color": null,
        "global_name": "axiom",
        "avatar_decoration_data": null,
        "banner_color": null
    },
    "attachments": [],
    "embeds": [],
    "mentions": [],
    "mention_roles": [],
    "pinned": false,
    "mention_everyone": false,
    "tts": false,
    "timestamp": "2023-09-25T17:46:57.123000+00:00",
    "edited_timestamp": null,
    "flags": 0,
    "components": []
},
```
