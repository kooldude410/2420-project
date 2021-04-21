let Database = {
    user1: {
        reminders: [
            { id: 1, title: 'test title', description: 'BCIT Downtown', completed: true },
            { id: 2, title: 'test title2', description: 'mount saint helens', completed: false }
        ],
        auth: [{ email: "w@w", password: "asdf" }

        ]

    },
    user2: {
        reminders: []
    }

}

module.exports = Database;