import { describe, expect, it, vi } from "vitest";
import { validateEmail, validateFormData } from "./utils";

describe("validateEmail()", () => {
  it("should return true if a valid email is provided", () => {
    const validEmails = [
      "test@example.com",
      "user.name+tag+sorting@example.com",
      "user@subdomain.example.com",
      "user@localhost.com",
      "user@domain.co.uk",
    ];

    validEmails.forEach((email) => {
      expect(validateEmail(email)).toBe(true);
    });
  });

  it("should return false if an invalid email is provided", () => {
    const invalidEmails = [
      "plainaddress",
      "@missingusername.com",
      "username@.com",
      "username@.com.",
      "username@domain,com",
      "username@domain..com",
      "username@domain@.com",
      "username@domain",
      "username@domain-.com",
    ];

    invalidEmails.forEach((email) => {
      expect(validateEmail(email)).toBe(false);
    });
  });
});

describe("validateFormData()", () => {
  it("should return true for valid form data", () => {
    const validData = {
      name: "John Doe",
      email: "johndoe@example.com",
      message: "This is a valid message",
    };

    expect(validateFormData(validData)).toBe(true);
  });

  it("should return false if the name is missing or too short", () => {
    const invalidData1 = {
      name: "",
      email: "johndoe@example.com",
      message: "This is a valid message",
    };

    const invalidData2 = {
      name: "Jo",
      email: "johndoe@example.com",
      message: "This is a valid message",
    };

    expect(validateFormData(invalidData1)).toBe(false);
    expect(validateFormData(invalidData2)).toBe(false);
  });

  it("should return false if the email is invalid", () => {
    const invalidData = {
      name: "John Doe",
      email: "invalid-email",
      message: "This is a valid message",
    };

    expect(validateFormData(invalidData)).toBe(false);
  });

  it("should return false if the message is missing or too short", () => {
    const invalidData1 = {
      name: "John Doe",
      email: "johndoe@example.com",
      message: "",
    };

    const invalidData2 = {
      name: "John Doe",
      email: "johndoe@example.com",
      message: "Short",
    };

    expect(validateFormData(invalidData1)).toBe(false);
    expect(validateFormData(invalidData2)).toBe(false);
  });
});
