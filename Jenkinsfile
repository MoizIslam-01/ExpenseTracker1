pipeline {
    agent any

    stages {

        stage('Clone Repository') {
            steps {
                git branch: 'main',
                url: 'https://github.com/AizaKhadim/ExpenseTrackerDocker.git'
            }
        }

        stage('Build Using Docker Compose') {
            steps {
                sh 'docker-compose down || true'
                sh 'docker-compose up --build'
            }
        }
    }

    post {
        always {
            sh 'docker-compose down || true'
        }
    }
}
