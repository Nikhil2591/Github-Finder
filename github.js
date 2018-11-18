class Github {
    constructor() {
        this.client_id = 'b6746568b2b42e3b1346';
        this.client_secret = '82a7a7fa22b9e56fbc336e568594b068c8811289';
        this.repos_count = 5;
        this.repos_sort = 'created: asc';
    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();
        const repos = await repoResponse.json();


        return { 
            profile,
            repos
        }
    }
}