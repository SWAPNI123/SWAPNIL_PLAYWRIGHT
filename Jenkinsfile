pipeline {
    agent any
    triggers {
        cron('H/15 * * * *') // Runs every 15 minutes
    }
    stages {
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }
        stage('Run Playwright Tests') {
            steps {
                sh 'npx playwright test'
            }
        }
    }
}
