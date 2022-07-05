export class EmpProfile {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }

  isValid() {
    return this.id && this.name;
  }

  toJson() {
    return {
      name: this.name,
    };
  }

  static fromFirebase(doc) {
    const data = doc.data();

    return new EmpProfile(
      doc.id,
      data.name,
    );
  }
}

