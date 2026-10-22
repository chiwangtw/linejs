import { assertEquals } from "@std/assert";
import { BaseClient } from "../mod.ts";

Deno.test("x-lal defaults to ja_JP", () => {
	const c = new BaseClient({ device: "ANDROIDSECONDARY" });
	assertEquals(c.request.getHeader()["x-lal"], "ja_JP");
});

Deno.test("x-lal follows init.lang", () => {
	const c = new BaseClient({ device: "ANDROIDSECONDARY", lang: "zh_TW" });
	assertEquals(c.request.getHeader()["x-lal"], "zh_TW");
});
