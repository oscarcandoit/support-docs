---
url: "https://platform.openai.com/docs/api-reference/assistants-streaming?lang=node"
title: "Streaming | OpenAI API Reference"
---

[DocsDocs](https://platform.openai.com/docs) [API referenceAPI](https://platform.openai.com/docs/api-reference/introduction)

Log in [Sign up](https://platform.openai.com/signup)

Search`` `K`

API Reference

[Introduction](https://platform.openai.com/docs/api-reference/introduction?lang=node)

[Authentication](https://platform.openai.com/docs/api-reference/authentication?lang=node)

[Debugging requests](https://platform.openai.com/docs/api-reference/debugging-requests?lang=node)

[Backward compatibility](https://platform.openai.com/docs/api-reference/backward-compatibility?lang=node)

Responses API

[Responses](https://platform.openai.com/docs/api-reference/responses?lang=node)

[Conversations](https://platform.openai.com/docs/api-reference/conversations?lang=node)

[Streaming events](https://platform.openai.com/docs/api-reference/responses-streaming?lang=node)

Webhooks

[Webhook Events](https://platform.openai.com/docs/api-reference/webhook-events?lang=node)

Platform APIs

[Audio](https://platform.openai.com/docs/api-reference/audio?lang=node)

[Videos](https://platform.openai.com/docs/api-reference/videos?lang=node)

[Images](https://platform.openai.com/docs/api-reference/images?lang=node)

[Image Streaming](https://platform.openai.com/docs/api-reference/images-streaming?lang=node)

[Embeddings](https://platform.openai.com/docs/api-reference/embeddings?lang=node)

[Evals](https://platform.openai.com/docs/api-reference/evals?lang=node)

[Fine-tuning](https://platform.openai.com/docs/api-reference/fine-tuning?lang=node)

[Graders](https://platform.openai.com/docs/api-reference/graders?lang=node)

[Batch](https://platform.openai.com/docs/api-reference/batch?lang=node)

[Files](https://platform.openai.com/docs/api-reference/files?lang=node)

[Uploads](https://platform.openai.com/docs/api-reference/uploads?lang=node)

[Models](https://platform.openai.com/docs/api-reference/models?lang=node)

[Moderations](https://platform.openai.com/docs/api-reference/moderations?lang=node)

Vector stores

[Vector stores](https://platform.openai.com/docs/api-reference/vector-stores?lang=node)

[Vector store files](https://platform.openai.com/docs/api-reference/vector-stores-files?lang=node)

[Vector store file batches](https://platform.openai.com/docs/api-reference/vector-stores-file-batches?lang=node)

ChatKit

Beta

[ChatKit](https://platform.openai.com/docs/api-reference/chatkit?lang=node)

Containers

[Containers](https://platform.openai.com/docs/api-reference/containers?lang=node)

[Container Files](https://platform.openai.com/docs/api-reference/container-files?lang=node)

Realtime

[Realtime](https://platform.openai.com/docs/api-reference/realtime?lang=node)

[Client secrets](https://platform.openai.com/docs/api-reference/realtime-sessions?lang=node)

[Calls](https://platform.openai.com/docs/api-reference/realtime-calls?lang=node)

[Client events](https://platform.openai.com/docs/api-reference/realtime-client-events?lang=node)

[Server events](https://platform.openai.com/docs/api-reference/realtime-server-events?lang=node)

Chat Completions

[Chat Completions](https://platform.openai.com/docs/api-reference/chat?lang=node)

[Streaming](https://platform.openai.com/docs/api-reference/chat-streaming?lang=node)

Assistants

Beta

[Assistants](https://platform.openai.com/docs/api-reference/assistants?lang=node)

[Threads](https://platform.openai.com/docs/api-reference/threads?lang=node)

[Messages](https://platform.openai.com/docs/api-reference/messages?lang=node)

[Runs](https://platform.openai.com/docs/api-reference/runs?lang=node)

[Run steps](https://platform.openai.com/docs/api-reference/run-steps?lang=node)

[Streaming](https://platform.openai.com/docs/api-reference/assistants-streaming?lang=node)

[The message delta object](https://platform.openai.com/docs/api-reference/assistants-streaming/message-delta-object?lang=node)

[The run step delta object](https://platform.openai.com/docs/api-reference/assistants-streaming/run-step-delta-object?lang=node)

[Assistant stream events](https://platform.openai.com/docs/api-reference/assistants-streaming/events?lang=node)

Administration

[Administration](https://platform.openai.com/docs/api-reference/administration?lang=node)

[Admin API Keys](https://platform.openai.com/docs/api-reference/admin-api-keys?lang=node)

[Invites](https://platform.openai.com/docs/api-reference/invite?lang=node)

[Users](https://platform.openai.com/docs/api-reference/users?lang=node)

[Groups](https://platform.openai.com/docs/api-reference/groups?lang=node)

[Roles](https://platform.openai.com/docs/api-reference/roles?lang=node)

[Role assignments](https://platform.openai.com/docs/api-reference/role-assignments?lang=node)

[Projects](https://platform.openai.com/docs/api-reference/projects?lang=node)

[Project users](https://platform.openai.com/docs/api-reference/project-users?lang=node)

[Project groups](https://platform.openai.com/docs/api-reference/project-groups?lang=node)

[Project service accounts](https://platform.openai.com/docs/api-reference/project-service-accounts?lang=node)

[Project API keys](https://platform.openai.com/docs/api-reference/project-api-keys?lang=node)

[Project rate limits](https://platform.openai.com/docs/api-reference/project-rate-limits?lang=node)

[Audit logs](https://platform.openai.com/docs/api-reference/audit-logs?lang=node)

[Usage](https://platform.openai.com/docs/api-reference/usage?lang=node)

[Certificates](https://platform.openai.com/docs/api-reference/certificates?lang=node)

Legacy

[Completions](https://platform.openai.com/docs/api-reference/completions?lang=node)

[Realtime Beta](https://platform.openai.com/docs/api-reference/realtime_beta?lang=node)

[Realtime Beta session tokens](https://platform.openai.com/docs/api-reference/realtime-beta-sessions?lang=node)

[Realtime Beta client events](https://platform.openai.com/docs/api-reference/realtime-beta-client-events?lang=node)

[Realtime Beta server events](https://platform.openai.com/docs/api-reference/realtime-beta-server-events?lang=node)

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

[PreviousRun steps](https://platform.openai.com/docs/api-reference/run-steps?lang=node) [NextAdministration](https://platform.openai.com/docs/api-reference/administration?lang=node)