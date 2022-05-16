const Koa = require("koa");
const logger = require("koa-logger")

const app = new Koa();
app.use(logger())

app.use(async (ctx) => {
  console.log(ctx.request)
  ctx.body = "ok"
});

app.listen(3000, () => {
  console.log("Order service running on http://localhost:3000")
})