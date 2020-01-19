export class Player {
    /**
     *
     */
    constructor(id, name, jerseyNumber, teamId) {
        this.Id = id;
        this.Name = name;
        this.JerseyNumber = jerseyNumber; 
        this.TeamId = teamId;       
    }
    public Id: number;
    public Name: string;
    public JerseyNumber: number;
    public TeamId: number;
}
