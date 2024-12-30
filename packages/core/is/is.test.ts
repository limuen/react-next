import { describe, test, expect, beforeAll, afterAll } from "vitest";
import {
  is,
  isFunction,
  isDef,
  isUnDef,
  isObject,
  isDate,
  isNumber,
  isAsyncFunction,
  isPromise,
  isString,
  isBoolean,
  isArray,
  isClient,
  isWindow,
  isElement,
  isNull,
  isNullOrUnDef,
  isHexColor,
  isEmptyObject,
  isHttp
} from "./index";

describe("Type Checking Functions", () => {
  // 保持原有的基础测试
  test("is function checks types correctly", () => {
    expect(is({}, "Object")).toBe(true);
    expect(is([], "Array")).toBe(true);
    expect(is(null, "Null")).toBe(true);
  });

  test("isFunction checks if value is a function", () => {
    expect(isFunction(() => {})).toBe(true);
    expect(isFunction(123)).toBe(false);
  });

  test("isDef checks if value is defined", () => {
    expect(isDef(0)).toBe(true);
    expect(isDef(undefined)).toBe(false);
  });

  test("isUnDef checks if value is undefined", () => {
    expect(isUnDef(undefined)).toBe(true);
    expect(isUnDef(null)).toBe(false);
  });

  test("isObject checks if value is an object", () => {
    expect(isObject({})).toBe(true);
    expect(isObject(null)).toBe(false);
    expect(isObject([])).toBe(false);
    expect(isObject(new Date())).toBe(false);
  });

  test("isDate checks if value is a date", () => {
    const date = new Date();
    expect(isDate(date)).toBe(true);
    expect(isDate("2023-01-01")).toBe(false);
    expect(isDate(null)).toBe(false);
    expect(isDate(123456789)).toBe(false);
  });

  test("isNumber checks if value is a number", () => {
    expect(isNumber(123)).toBe(true);
    expect(isNumber(NaN)).toBe(true);
    expect(isNumber(Infinity)).toBe(true);
    expect(isNumber("123")).toBe(false);
    expect(isNumber(null)).toBe(false);
  });

  test("isAsyncFunction checks if value is an AsyncFunction", () => {
    expect(isAsyncFunction(async () => {})).toBe(true);
    expect(isAsyncFunction(() => {})).toBe(false);
    expect(isAsyncFunction(function () {})).toBe(false);
    expect(isAsyncFunction(null)).toBe(false);
  });

  test("isPromise checks if value is a promise", () => {
    expect(isPromise(Promise.resolve())).toBe(true);
    expect(isPromise(new Promise(() => {}))).toBe(true);
    expect(isPromise({ then: () => {} })).toBe(false);
    expect(isPromise(null)).toBe(false);
  });

  test("isString checks if value is a string", () => {
    expect(isString("hello")).toBe(true);
    expect(isString("")).toBe(true);
    expect(isString(String("hello"))).toBe(true);
    expect(isString(123)).toBe(false);
    expect(isString(null)).toBe(false);
  });

  test("isBoolean checks if value is a boolean", () => {
    expect(isBoolean(true)).toBe(true);
    expect(isBoolean(false)).toBe(true);
    expect(isBoolean(Boolean(1))).toBe(true);
    expect(isBoolean(1)).toBe(false);
    expect(isBoolean("true")).toBe(false);
  });

  test("isArray checks if value is an array", () => {
    expect(isArray([])).toBe(true);
    expect(isArray([1, 2, 3])).toBe(true);
    expect(isArray([])).toBe(true);
    expect(isArray({})).toBe(false);
    expect(isArray(null)).toBe(false);
  });

  test("isClient checks if it is the client", () => {
    expect(isClient()).toBe(typeof window !== "undefined");
  });

  describe("isWindow checks if value is a window", () => {
    beforeAll(() => {
      global.window = {} as Window & typeof globalThis;
    });

    afterAll(() => {
      delete (global as any).window;
    });

    test("should return true for window object", () => {
      expect(isWindow(window)).toBe(true);
    });

    test("should return false for non-window objects", () => {
      expect(isWindow({})).toBe(false);
      expect(isWindow(null)).toBe(false);
      expect(isWindow(undefined)).toBe(false);
    });
  });

  test("isElement checks if value is an element", () => {
    const div = document.createElement("div");
    const text = document.createTextNode("text");

    expect(isElement(div)).toBe(true);
    expect(isElement(text)).toBe(false);
    expect(isElement(null)).toBe(false);
    expect(isElement({})).toBe(false);
  });

  test("isNull checks if value is null", () => {
    expect(isNull(null)).toBe(true);
    expect(isNull(undefined)).toBe(false);
    expect(isNull(0)).toBe(false);
    expect(isNull("")).toBe(false);
  });

  test("isNullOrUnDef checks if value is null or undefined", () => {
    expect(isNullOrUnDef(null)).toBe(true);
    expect(isNullOrUnDef(undefined)).toBe(true);
    expect(isNullOrUnDef(void 0)).toBe(true);
    expect(isNullOrUnDef(0)).toBe(false);
    expect(isNullOrUnDef("")).toBe(false);
  });

  test("isHexColor checks if value is a hex color", () => {
    expect(isHexColor("#fff")).toBe(true);
    expect(isHexColor("#000")).toBe(true);
    expect(isHexColor("#123456")).toBe(true);
    expect(isHexColor("#ABCDEF")).toBe(true);
    expect(isHexColor("fff")).toBe(false);
    expect(isHexColor("#12345")).toBe(false);
    expect(isHexColor("#ABCDEG")).toBe(false);
  });

  test("isEmptyObject checks if an object is empty", () => {
    expect(isEmptyObject({})).toBe(true);
    expect(isEmptyObject(Object.create(null))).toBe(true);
    expect(isEmptyObject({ key: "value" })).toBe(false);
    expect(isEmptyObject(null)).toBe(true);
    expect(isEmptyObject(undefined)).toBe(true);
    expect(isEmptyObject([])).toBe(true);
  });

  test("isHttp checks if value starts with http/https", () => {
    expect(isHttp("http://example.com")).toBe(true);
    expect(isHttp("https://example.com")).toBe(true);
    expect(isHttp("https://sub.domain.com/path?query=1")).toBe(true);
    expect(isHttp("ftp://example.com")).toBe(false);
    expect(isHttp("//example.com")).toBe(false);
    expect(isHttp("example.com")).toBe(false);
  });
});
