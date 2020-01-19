import { Sport } from './sport';

export class Team {
    public Id: Number;
    public Name: String;
    public SportId: Number;

    constructor(id, name, sportId) {
        this.Id = id;
        this.Name = name;
        this.SportId = sportId;
    }
}