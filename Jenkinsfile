pipeline {
    agent any

    stages {

        stage('Clone Repository') {
            steps {
                git branch: 'main',
                url: 'https://github.com/AizaKhadim/ExpenseTrackerDocker.git'
            }
        }

        stage('Build & Run App Using Docker Compose') {
            steps {
                sh 'docker-compose down || true'
                sh 'docker-compose up --build -d'
            }
        }

        stage('Run Selenium Tests (Non-blocking)') {
            steps {
                dir('selenium-tests') {
                    // Prevent pipeline failure even if tests fail
                    catchError(buildResult: 'SUCCESS', stageResult: 'FAILURE') {
                        sh 'docker build -t selenium-tests .'
                        sh 'docker run --network=host selenium-tests'
                    }
                }
            }
        }
    }

    post {
        always {
            sh 'docker-compose down || true'

            emailext (
                subject: "Jenkins Pipeline Result: ${env.JOB_NAME} #${env.BUILD_NUMBER}",
                body: """
Hello,

The Jenkins pipeline has completed.

Job Name: ${env.JOB_NAME}
Build Number: ${env.BUILD_NUMBER}
Build Status: ${currentBuild.currentResult}

You can view details here:
${env.BUILD_URL}

Regards,
Jenkins
""",
                to: "aimankhanniazi16@gmail.com"
            )
        }
    }
}
