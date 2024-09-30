// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Bytes,
  BigInt,
  BigDecimal,
} from "@graphprotocol/graph-ts";

export class BridgeTxn extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save BridgeTxn entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type BridgeTxn must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`,
      );
      store.set("BridgeTxn", id.toString(), this);
    }
  }

  static loadInBlock(id: string): BridgeTxn | null {
    return changetype<BridgeTxn | null>(store.get_in_block("BridgeTxn", id));
  }

  static load(id: string): BridgeTxn | null {
    return changetype<BridgeTxn | null>(store.get("BridgeTxn", id));
  }

  get id(): string {
    let value = this.get("id");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get type(): i32 {
    let value = this.get("type");
    if (!value || value.kind == ValueKind.NULL) {
      return 0;
    } else {
      return value.toI32();
    }
  }

  set type(value: i32) {
    this.set("type", Value.fromI32(value));
  }

  get target(): Bytes {
    let value = this.get("target");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set target(value: Bytes) {
    this.set("target", Value.fromBytes(value));
  }

  get amount(): BigInt {
    let value = this.get("amount");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set amount(value: BigInt) {
    this.set("amount", Value.fromBigInt(value));
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }

  get btcTxid(): Bytes {
    let value = this.get("btcTxid");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set btcTxid(value: Bytes) {
    this.set("btcTxid", Value.fromBytes(value));
  }

  get btcTxout(): i32 {
    let value = this.get("btcTxout");
    if (!value || value.kind == ValueKind.NULL) {
      return 0;
    } else {
      return value.toI32();
    }
  }

  set btcTxout(value: i32) {
    this.set("btcTxout", Value.fromI32(value));
  }

  get tax(): BigInt {
    let value = this.get("tax");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set tax(value: BigInt) {
    this.set("tax", Value.fromBigInt(value));
  }

  get withdrawId(): BigInt | null {
    let value = this.get("withdrawId");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set withdrawId(value: BigInt | null) {
    if (!value) {
      this.unset("withdrawId");
    } else {
      this.set("withdrawId", Value.fromBigInt(<BigInt>value));
    }
  }

  get maxTxPrice(): BigInt {
    let value = this.get("maxTxPrice");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set maxTxPrice(value: BigInt) {
    this.set("maxTxPrice", Value.fromBigInt(value));
  }

  get receiver(): string {
    let value = this.get("receiver");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set receiver(value: string) {
    this.set("receiver", Value.fromString(value));
  }

  get status(): string {
    let value = this.get("status");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set status(value: string) {
    this.set("status", Value.fromString(value));
  }
}

export class PaidTxn extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save PaidTxn entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type PaidTxn must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`,
      );
      store.set("PaidTxn", id.toString(), this);
    }
  }

  static loadInBlock(id: string): PaidTxn | null {
    return changetype<PaidTxn | null>(store.get_in_block("PaidTxn", id));
  }

  static load(id: string): PaidTxn | null {
    return changetype<PaidTxn | null>(store.get("PaidTxn", id));
  }

  get id(): string {
    let value = this.get("id");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get withdrawId(): BigInt {
    let value = this.get("withdrawId");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set withdrawId(value: BigInt) {
    this.set("withdrawId", Value.fromBigInt(value));
  }

  get btcTxid(): Bytes {
    let value = this.get("btcTxid");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set btcTxid(value: Bytes) {
    this.set("btcTxid", Value.fromBytes(value));
  }

  get btcTxout(): i32 {
    let value = this.get("btcTxout");
    if (!value || value.kind == ValueKind.NULL) {
      return 0;
    } else {
      return value.toI32();
    }
  }

  set btcTxout(value: i32) {
    this.set("btcTxout", Value.fromI32(value));
  }

  get value(): BigInt {
    let value = this.get("value");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set value(value: BigInt) {
    this.set("value", Value.fromBigInt(value));
  }

  get status(): string {
    let value = this.get("status");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set status(value: string) {
    this.set("status", Value.fromString(value));
  }
}

export class BridgeTxnWidIndex extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save BridgeTxnWidIndex entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type BridgeTxnWidIndex must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`,
      );
      store.set("BridgeTxnWidIndex", id.toString(), this);
    }
  }

  static loadInBlock(id: string): BridgeTxnWidIndex | null {
    return changetype<BridgeTxnWidIndex | null>(
      store.get_in_block("BridgeTxnWidIndex", id),
    );
  }

  static load(id: string): BridgeTxnWidIndex | null {
    return changetype<BridgeTxnWidIndex | null>(
      store.get("BridgeTxnWidIndex", id),
    );
  }

  get id(): string {
    let value = this.get("id");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get bridgeTxnId(): string {
    let value = this.get("bridgeTxnId");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set bridgeTxnId(value: string) {
    this.set("bridgeTxnId", Value.fromString(value));
  }
}
