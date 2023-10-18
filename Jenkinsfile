pipeline {
  agent any
  stages {
    stage('Ckeckout Code') {
      steps {
        git(url: 'https://github.com/mauriwt/jenkins-project', branch: 'main')
      }
    }

    stage('Docker Build') {
      steps {
        sh 'docker build -t mtituana/angular-app .'
      }
    }

    stage('Login to DocketHub') {
      environment {
        DOCKERHUB_CREDENTIALS = credentials('dockerCredential')
      }
      steps {
        sh 'echo $DOCKERHUB_CREDENTIALS_PSW | docker login -u $DOCKERHUB_CREDENTIALS_USR --password-stdin'
        sh 'docker tag mtituana/angular-app mtituana/angular-app:v$BUILD_NUMBER'
        sh 'docker push mtituana/angular-app:v$BUILD_NUMBER'
      }
    }

    stage('k8s deploy') {
      steps {
        sh 'kubectl apply -f k8s.yaml'
      }
    }

  }
}