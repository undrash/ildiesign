pipeline {

    agent any

    environment {
        PASS = credentials('andrei_dockerhub_pw')
		HOST_NAME = 'ildiesign'
		HOST_ADDRESS = '159.89.104.90'	
    }

    stages {

        stage('Build Docker Images') {
            steps {
                sh './jenkins/build/build.sh'
            }

        }

        stage('Push Docker Images') {
            steps {
                sh './jenkins/push/push.sh'
            }
        }

        stage('Test') {
            steps {
                echo 'Fake testing...'
            }
        }

        stage('SHH Auth') {
			steps {
				script {
                    method_remote_deploy()
                }
            }
        }
    }
}


def method_remote_deploy() {
	withCredentials([
		sshUserPrivateKey(credentialsId: 'boardme_api_cluster_auth', usernameVariable: 'USER', keyFileVariable: 'KEYFILE')
	]) {
	
		def remote = [:]
		remote.user = "${USER}"
		remote.host = "${HOST_ADDRESS}"
		remote.name = "${HOST_NAME}"
		remote.allowAnyHosts = true
		remote.identityFile = "${KEYFILE}"
		
		
		stage('Deploy to cluster') {
		    sshCommand remote: remote, command: "docker login -u gasparandr -p \"${PASS}\""
		    sshPut remote: remote, from: 'docker-cloud.yml', into: '.'
		    sshScript remote: remote, script: "jenkins/deploy/deploy.sh"
		}
	}
}
