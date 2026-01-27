# Community tool shed sharing api story v2

## Purpose

This API enables community members to operate a shared tool shed by purchasing tools for communal use, checking tools in and out for fixed periods, and arranging for a tool shed manager to ship tools for repair or replacement when needed.

The system preserves meaning, history, and accountability by recording circulation events, tool status changes, and shipment history without erasing prior records.

---

## Data properties

### Tool

- **toolId**: Unique identifier for a tool. [uuid] Required, immutable.
- **toolName**: Human-friendly name of the tool. [string] Required.
- **toolCategory**: Classification used for browsing and filtering. [enum] Required.
- **toolStatus**: Circulation status of the tool. [enum] Required.
- **toolCondition**: Current condition assessment. [enum] Required.
- **toolLocation**: Where the tool is currently stored or expected to be. [string] Required.
- **acquisitionDate**: Date the tool entered the system. [date] Required.
- **replacedByToolId**: Reference to replacement tool. [uuid] Optional.
- **createdAt**: Record creation timestamp. [datetime] System-generated.
- **lastModifiedAt**: Last modification timestamp. [datetime] System-generated.

### Member

- **memberId**: Unique identifier for a member. [uuid] Required, immutable.
- **memberName**: Display name for the member. [string] Required.
- **contactInfo**: Contact details. [object] Required.
- **membershipStatus**: Standing used to determine eligibility. [enum] Required.
- **createdAt**: Record creation timestamp. [datetime] System-generated.
- **lastModifiedAt**: Last modification timestamp. [datetime] System-generated.

### Checkout

- **checkoutId**: Unique identifier for a checkout event. [uuid] Required.
- **toolId**: Borrowed tool. [uuid] Required.
- **memberId**: Borrowing member. [uuid] Required.
- **checkoutDate**: Checkout timestamp. [datetime] Required.
- **dueDate**: Due timestamp. [datetime] Required.
- **returnDate**: Return timestamp. [datetime] Optional.
- **checkoutStatus**: Derived checkout state. [enum] System-derived.

### Shipment ledger entry

- **shipmentId**: Unique identifier for shipment entry. [uuid] Required.
- **toolId**: Associated tool. [uuid] Required.
- **shipmentType**: Repair or replacement. [enum] Required.
- **shippedDate**: Shipment timestamp. [datetime] Required.
- **returnDate**: Return timestamp. [datetime] Optional.
- **shipmentStatus**: Shipment lifecycle state. [enum] Required.

---

## Resources or states

### Home

Entry point providing navigation to tools, members, and checkouts.

### Tools

Collection view of all tools.

### Tool

Detailed view of a single tool including circulation eligibility and history.

### Members

Collection view of registered members.

### Member

Detailed view of a single member.

### Checkouts

Collection view of checkout ledger entries.

### Checkout

Detailed view of a single checkout event.

---

## Actions

Actions describe what people or systems can do within this world.

### viewHome
Returns: Home  
Type: Safe

### viewToolList
Returns: Tools  
Type: Safe

### viewTool
Returns: Tool  
Type: Safe

### addTool
Returns: Tool  
Type: Unsafe

### editTool
Returns: Tool  
Type: Idempotent

### changeToolStatus
Returns: Tool  
Type: Idempotent

### checkoutTool
Returns: Checkout  
Type: Unsafe

### checkinTool
Returns: Tool  
Type: Idempotent

### repairTool
Returns: Tool  
Type: Unsafe

### viewMembersList
Returns: Members  
Type: Safe

### viewMember
Returns: Member  
Type: Safe

### addMember
Returns: Member  
Type: Unsafe

### editMember
Returns: Member  
Type: Idempotent

### changeMemberStatus
Returns: Member  
Type: Idempotent

### viewCheckoutList
Returns: Checkouts  
Type: Safe

### viewCheckout
Returns: Checkout  
Type: Safe

---

## Rules

- A tool can only be checked out when its status allows circulation.
- A tool that is checked out cannot be checked out again until it is checked in.
- A member must be in good standing to check out tools.
- Status changes do not erase historical records.
- Shipment entries are append-only.

---

## Roles

- **member**: Community participant.
- **manager**: Tool shed operator.
- **auditor**: Read-only oversight role.

---

## Observability notes

- Emit events for tool creation, checkout, checkin, and shipment updates.
- Record audit entries for all manager actions.

---

## Lifecycle notes

- Completed checkouts remain visible for accountability.
- Replaced tools remain navigable but not eligible for checkout.
