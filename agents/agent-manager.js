export class AgentManager {
    agents = [];
    register(agent) {
        this.agents.push(agent);
        console.log(`Registered agent: ${agent.name}`);
    }
    list() {
        return this.agents;
    }
    count() {
        return this.agents.length;
    }
}
