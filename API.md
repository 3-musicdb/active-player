# CRUD ROUTES

## Create (POST)

Post one song to songs table in database;

`POST /songs/`

Parameters

| Name | Type | Description |
|:----:|:----:|:----:|
| `title` | `text` | *Required.* Song title. |
| `album` | `text` | *Required.* Album song comes from. |
| `artist` | `text` | *Required.* Name of artist. |
| `likes` | `integer` | Number of likes song has recieved. |
| `length` | `integer` | *Required.* Total length of song in seconds. |


## Read (GET)

Get a single song by the song id.

`GET /songs/:id`

Parameters

| Name | Type | Description |
|:----:|:----:|:----:|
| `songId` | `integer` | *Required.* Id of song in database. |

Response

| Name | Type | Description |
|:----:|:----:|:----:|
| `songId` | `integer` | *Required.* Song id of selected song. |
| `title` | `text` | *Required.* Title of song. |
| `album` | `text` | *Required.* Name of album song belongs to. |
| `artist` | `text` | *Required.* Name of artist. |
| `upNext` | `text` | Name of song to be played next. |
| `prevPlayed` | `text` | Name of previously played song. |
| `length` | `integer` | *Required.* Length of song in seconds. |
| `likes` | `integer` | *Required.* Number of likes for this song. |
| `timestamp` | `integer` | Timestamp of last playing song at seconds. |

## Update (PATCH)

Add or subtract a like from a specific song

`PATCH /likes/:songId`

Parameters

| Name | Type | Description |
|:----:|:----:|:----:|
| `songId` | `integer` | *Required.* Id of current song. |
| `likes` | `integer` | *Required.* The number 1 for a single like. |

Save the timestamp of the current playing song

`PATCH /songs/:songId/:timestamp`

Parameters

| Name | Type | Description |
|:----:|:----:|:----:|
| `songId` | `integer` | *Required.* Id of current song. |
| `timestamp` | `integer` | *Required.* Timestamp of currently playing song in seconds. |

## Delete (DELETE)

Delete one song from database.

`DELETE /songs/:id`

Parameters

| Name | Type | Description |
|:----:|:----:|:----:|
| `songId` | `integer` | *Required.* sond identifier of song to delete. |