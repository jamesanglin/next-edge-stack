export interface Env {
  // Add your bindings here, e.g.:
  // MY_KV: KVNamespace;
  // MY_DURABLE_OBJECT: DurableObjectNamespace;
  [key: string]: unknown;
}

export default {
  async fetch(
    _request: Request,
    _env: Env,
    _ctx: ExecutionContext
  ): Promise<Response> {
    return new Response("Hello from Cloudflare Workers!", {
      headers: {
        "content-type": "text/plain",
      },
    });
  },
};
