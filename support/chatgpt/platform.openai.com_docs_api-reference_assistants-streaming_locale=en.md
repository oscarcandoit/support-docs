---
url: "https://platform.openai.com/docs/api-reference/assistants-streaming?locale=en"
title: "Streaming | OpenAI API Reference"
---

[DocsDocs](https://platform.openai.com/docs) [API referenceAPI](https://platform.openai.com/docs/api-reference/introduction)

Log in [Sign up](https://platform.openai.com/signup)

Search`` `K`

API Reference

[Introduction](https://platform.openai.com/docs/api-reference/introduction?locale=en)

[Authentication](https://platform.openai.com/docs/api-reference/authentication?locale=en)

[Debugging requests](https://platform.openai.com/docs/api-reference/debugging-requests?locale=en)

[Backward compatibility](https://platform.openai.com/docs/api-reference/backward-compatibility?locale=en)

Responses API

[Responses](https://platform.openai.com/docs/api-reference/responses?locale=en)

[Conversations](https://platform.openai.com/docs/api-reference/conversations?locale=en)

[Streaming events](https://platform.openai.com/docs/api-reference/responses-streaming?locale=en)

Webhooks

[Webhook Events](https://platform.openai.com/docs/api-reference/webhook-events?locale=en)

Platform APIs

[Audio](https://platform.openai.com/docs/api-reference/audio?locale=en)

[Videos](https://platform.openai.com/docs/api-reference/videos?locale=en)

[Images](https://platform.openai.com/docs/api-reference/images?locale=en)

[Image Streaming](https://platform.openai.com/docs/api-reference/images-streaming?locale=en)

[Embeddings](https://platform.openai.com/docs/api-reference/embeddings?locale=en)

[Evals](https://platform.openai.com/docs/api-reference/evals?locale=en)

[Fine-tuning](https://platform.openai.com/docs/api-reference/fine-tuning?locale=en)

[Graders](https://platform.openai.com/docs/api-reference/graders?locale=en)

[Batch](https://platform.openai.com/docs/api-reference/batch?locale=en)

[Files](https://platform.openai.com/docs/api-reference/files?locale=en)

[Uploads](https://platform.openai.com/docs/api-reference/uploads?locale=en)

[Models](https://platform.openai.com/docs/api-reference/models?locale=en)

[Moderations](https://platform.openai.com/docs/api-reference/moderations?locale=en)

Vector stores

[Vector stores](https://platform.openai.com/docs/api-reference/vector-stores?locale=en)

[Vector store files](https://platform.openai.com/docs/api-reference/vector-stores-files?locale=en)

[Vector store file batches](https://platform.openai.com/docs/api-reference/vector-stores-file-batches?locale=en)

ChatKit

Beta

[ChatKit](https://platform.openai.com/docs/api-reference/chatkit?locale=en)

Containers

[Containers](https://platform.openai.com/docs/api-reference/containers?locale=en)

[Container Files](https://platform.openai.com/docs/api-reference/container-files?locale=en)

Realtime

[Realtime](https://platform.openai.com/docs/api-reference/realtime?locale=en)

[Client secrets](https://platform.openai.com/docs/api-reference/realtime-sessions?locale=en)

[Calls](https://platform.openai.com/docs/api-reference/realtime-calls?locale=en)

[Client events](https://platform.openai.com/docs/api-reference/realtime-client-events?locale=en)

[Server events](https://platform.openai.com/docs/api-reference/realtime-server-events?locale=en)

Chat Completions

[Chat Completions](https://platform.openai.com/docs/api-reference/chat?locale=en)

[Streaming](https://platform.openai.com/docs/api-reference/chat-streaming?locale=en)

Assistants

Beta

[Assistants](https://platform.openai.com/docs/api-reference/assistants?locale=en)

[Threads](https://platform.openai.com/docs/api-reference/threads?locale=en)

[Messages](https://platform.openai.com/docs/api-reference/messages?locale=en)

[Runs](https://platform.openai.com/docs/api-reference/runs?locale=en)

[Run steps](https://platform.openai.com/docs/api-reference/run-steps?locale=en)

[Streaming](https://platform.openai.com/docs/api-reference/assistants-streaming?locale=en)

[The message delta object](https://platform.openai.com/docs/api-reference/assistants-streaming/message-delta-object?locale=en)

[The run step delta object](https://platform.openai.com/docs/api-reference/assistants-streaming/run-step-delta-object?locale=en)

[Assistant stream events](https://platform.openai.com/docs/api-reference/assistants-streaming/events?locale=en)

Administration

[Administration](https://platform.openai.com/docs/api-reference/administration?locale=en)

[Admin API Keys](https://platform.openai.com/docs/api-reference/admin-api-keys?locale=en)

[Invites](https://platform.openai.com/docs/api-reference/invite?locale=en)

[Users](https://platform.openai.com/docs/api-reference/users?locale=en)

[Groups](https://platform.openai.com/docs/api-reference/groups?locale=en)

[Roles](https://platform.openai.com/docs/api-reference/roles?locale=en)

[Role assignments](https://platform.openai.com/docs/api-reference/role-assignments?locale=en)

[Projects](https://platform.openai.com/docs/api-reference/projects?locale=en)

[Project users](https://platform.openai.com/docs/api-reference/project-users?locale=en)

[Project groups](https://platform.openai.com/docs/api-reference/project-groups?locale=en)

[Project service accounts](https://platform.openai.com/docs/api-reference/project-service-accounts?locale=en)

[Project API keys](https://platform.openai.com/docs/api-reference/project-api-keys?locale=en)

[Project rate limits](https://platform.openai.com/docs/api-reference/project-rate-limits?locale=en)

[Audit logs](https://platform.openai.com/docs/api-reference/audit-logs?locale=en)

[Usage](https://platform.openai.com/docs/api-reference/usage?locale=en)

[Certificates](https://platform.openai.com/docs/api-reference/certificates?locale=en)

Legacy

[Completions](https://platform.openai.com/docs/api-reference/completions?locale=en)

[Realtime Beta](https://platform.openai.com/docs/api-reference/realtime_beta?locale=en)

[Realtime Beta session tokens](https://platform.openai.com/docs/api-reference/realtime-beta-sessions?locale=en)

[Realtime Beta client events](https://platform.openai.com/docs/api-reference/realtime-beta-client-events?locale=en)

[Realtime Beta server events](https://platform.openai.com/docs/api-reference/realtime-beta-server-events?locale=en)

[Cookbook](https://cookbook.openai.com/) [Forum](https://community.openai.com/categories)

## Streaming  Beta

Stream the result of executing a Run or resuming a Run after submitting tool outputs.
You can stream events from the [Create Thread and Run](https://platform.openai.com/docs/api-reference/runs/createThreadAndRun),
[Create Run](https://platform.openai.com/docs/api-reference/runs/createRun), and [Submit Tool Outputs](https://platform.openai.com/docs/api-reference/runs/submitToolOutputs)
endpoints by passing `"stream": true`. The response will be a [Server-Sent events](https://html.spec.whatwg.org/multipage/server-sent-events.html#server-sent-events) stream.
Our Node and Python SDKs provide helpful utilities to make streaming easy. Reference the
[Assistants API quickstart](https://platform.openai.com/docs/assistants/overview) to learn more.

## The message delta object  Beta

Represents a message delta i.e. any changed fields on a message during streaming.

delta

object

The delta containing the fields that have changed on the Message.

Show properties

id

string

The identifier of the message, which can be referenced in API endpoints.

object

string

The object type, which is always `thread.message.delta`.

OBJECT The message delta object

```
1
2
3
4
5
6
7
8
9
10
11
12
13
{
  "id": "msg_123",
  "object": "thread.message.delta",
  "delta": {
    "content": [\
      {\
        "index": 0,\
        "type": "text",\
        "text": { "value": "Hello", "annotations": [] }\
      }\
    ]
  }
}
```

## The run step delta object  Beta

Represents a run step delta i.e. any changed fields on a run step during streaming.

delta

object

The delta containing the fields that have changed on the run step.

Show properties

id

string

The identifier of the run step, which can be referenced in API endpoints.

object

string

The object type, which is always `thread.run.step.delta`.

OBJECT The run step delta object

```
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
{
  "id": "step_123",
  "object": "thread.run.step.delta",
  "delta": {
    "step_details": {
      "type": "tool_calls",
      "tool_calls": [\
        {\
          "index": 0,\
          "id": "call_123",\
          "type": "code_interpreter",\
          "code_interpreter": { "input": "", "outputs": [] }\
        }\
      ]
    }
  }
}
```

## Assistant stream events  Beta

Represents an event emitted when streaming a Run.

Each event in a server-sent events stream has an `event` and `data` property:

```
event: thread.created
data: {"id": "thread_123", "object": "thread", ...}
```

We emit events whenever a new object is created, transitions to a new state, or is being
streamed in parts (deltas). For example, we emit `thread.run.created` when a new run
is created, `thread.run.completed` when a run completes, and so on. When an Assistant chooses
to create a message during a run, we emit a `thread.message.created event`, a
`thread.message.in_progress` event, many `thread.message.delta` events, and finally a
`thread.message.completed` event.

We may add additional events over time, so we recommend handling unknown events gracefully
in your code. See the [Assistants API quickstart](https://platform.openai.com/docs/assistants/overview) to learn how to
integrate the Assistants API with streaming.

done

`data` is `[DONE]`

Occurs when a stream ends.

error

`data` is an [error](https://platform.openai.com/docs/guides/error-codes#api-errors)

Occurs when an [error](https://platform.openai.com/docs/guides/error-codes#api-errors) occurs. This can happen due to an internal server error or a timeout.

thread.created

`data` is a [thread](https://platform.openai.com/docs/api-reference/threads/object)

Occurs when a new [thread](https://platform.openai.com/docs/api-reference/threads/object) is created.

thread.message.completed

`data` is a [message](https://platform.openai.com/docs/api-reference/messages/object)

Occurs when a [message](https://platform.openai.com/docs/api-reference/messages/object) is completed.

thread.message.created

`data` is a [message](https://platform.openai.com/docs/api-reference/messages/object)

Occurs when a [message](https://platform.openai.com/docs/api-reference/messages/object) is created.

thread.message.delta

`data` is a [message delta](https://platform.openai.com/docs/api-reference/assistants-streaming/message-delta-object)

Occurs when parts of a [Message](https://platform.openai.com/docs/api-reference/messages/object) are being streamed.

thread.message.in\_progress

`data` is a [message](https://platform.openai.com/docs/api-reference/messages/object)

Occurs when a [message](https://platform.openai.com/docs/api-reference/messages/object) moves to an `in_progress` state.

thread.message.incomplete

`data` is a [message](https://platform.openai.com/docs/api-reference/messages/object)

Occurs when a [message](https://platform.openai.com/docs/api-reference/messages/object) ends before it is completed.

thread.run.cancelled

`data` is a [run](https://platform.openai.com/docs/api-reference/runs/object)

Occurs when a [run](https://platform.openai.com/docs/api-reference/runs/object) is cancelled.

thread.run.cancelling

`data` is a [run](https://platform.openai.com/docs/api-reference/runs/object)

Occurs when a [run](https://platform.openai.com/docs/api-reference/runs/object) moves to a `cancelling` status.

thread.run.completed

`data` is a [run](https://platform.openai.com/docs/api-reference/runs/object)

Occurs when a [run](https://platform.openai.com/docs/api-reference/runs/object) is completed.

thread.run.created

`data` is a [run](https://platform.openai.com/docs/api-reference/runs/object)

Occurs when a new [run](https://platform.openai.com/docs/api-reference/runs/object) is created.

thread.run.expired

`data` is a [run](https://platform.openai.com/docs/api-reference/runs/object)

Occurs when a [run](https://platform.openai.com/docs/api-reference/runs/object) expires.

thread.run.failed

`data` is a [run](https://platform.openai.com/docs/api-reference/runs/object)

Occurs when a [run](https://platform.openai.com/docs/api-reference/runs/object) fails.

thread.run.in\_progress

`data` is a [run](https://platform.openai.com/docs/api-reference/runs/object)

Occurs when a [run](https://platform.openai.com/docs/api-reference/runs/object) moves to an `in_progress` status.

thread.run.incomplete

`data` is a [run](https://platform.openai.com/docs/api-reference/runs/object)

Occurs when a [run](https://platform.openai.com/docs/api-reference/runs/object) ends with status `incomplete`.

thread.run.queued

`data` is a [run](https://platform.openai.com/docs/api-reference/runs/object)

Occurs when a [run](https://platform.openai.com/docs/api-reference/runs/object) moves to a `queued` status.

thread.run.requires\_action

`data` is a [run](https://platform.openai.com/docs/api-reference/runs/object)

Occurs when a [run](https://platform.openai.com/docs/api-reference/runs/object) moves to a `requires_action` status.

thread.run.step.cancelled

`data` is a [run step](https://platform.openai.com/docs/api-reference/run-steps/step-object)

Occurs when a [run step](https://platform.openai.com/docs/api-reference/run-steps/step-object) is cancelled.

thread.run.step.completed

`data` is a [run step](https://platform.openai.com/docs/api-reference/run-steps/step-object)

Occurs when a [run step](https://platform.openai.com/docs/api-reference/run-steps/step-object) is completed.

thread.run.step.created

`data` is a [run step](https://platform.openai.com/docs/api-reference/run-steps/step-object)

Occurs when a [run step](https://platform.openai.com/docs/api-reference/run-steps/step-object) is created.

thread.run.step.delta

`data` is a [run step delta](https://platform.openai.com/docs/api-reference/assistants-streaming/run-step-delta-object)

Occurs when parts of a [run step](https://platform.openai.com/docs/api-reference/run-steps/step-object) are being streamed.

thread.run.step.expired

`data` is a [run step](https://platform.openai.com/docs/api-reference/run-steps/step-object)

Occurs when a [run step](https://platform.openai.com/docs/api-reference/run-steps/step-object) expires.

thread.run.step.failed

`data` is a [run step](https://platform.openai.com/docs/api-reference/run-steps/step-object)

Occurs when a [run step](https://platform.openai.com/docs/api-reference/run-steps/step-object) fails.

thread.run.step.in\_progress

`data` is a [run step](https://platform.openai.com/docs/api-reference/run-steps/step-object)

Occurs when a [run step](https://platform.openai.com/docs/api-reference/run-steps/step-object) moves to an `in_progress` state.

[PreviousRun steps](https://platform.openai.com/docs/api-reference/run-steps?locale=en) [NextAdministration](https://platform.openai.com/docs/api-reference/administration?locale=en)