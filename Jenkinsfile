pipeline {

    agent any

    environment {
        PASS = credentials('andrei_dockerhub_pw')
		HOST_NAME = 'ildiesign'
		HOST_ADDRESS = '159.89.104.90'	
    }

    stages {

		stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }

        }

		stage('Build Project') {
            steps {
                sh 'npm run build'
            }

        }

        stage('Build Docker Images') {
            steps {
                sh 'sed -i -e \'s/\\r\$//\' jenkins/build/build.sh'
                sh 'chmod +x jenkins/build/build.sh'
                sh './jenkins/build/build.sh'
            }

        }

        stage('Push Docker Images') {
            steps {
                sh 'sed -i -e \'s/\\r\$//\' jenkins/push/push.sh'
                sh 'chmod +x jenkins/push/push.sh'
                sh './jenkins/push/push.sh'
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
		sshUserPrivateKey(credentialsId: 'ildiesign_andrei', usernameVariable: 'USER', keyFileVariable: 'KEYFILE')
	]) {
	
		def remote = [:]
		remote.user = "${USER}"
		remote.host = "${HOST_ADDRESS}"
		remote.name = "${HOST_NAME}"
		remote.allowAnyHosts = true
		remote.identityFile = "${KEYFILE}"

		
		stage('Inject config') {
		    sshPut remote: remote, from: 'jenkins/config/ildiesign.conf', into: '.'
		    sshScript remote: remote, script: "jenkins/config/config.sh"
		}


        stage('Deploy to cluster') {
            sshCommand remote: remote, command: "echo \"${PASS}\" | docker login -u gasparandr --password-stdin"
            sshScript remote: remote, script: "jenkins/deploy/deploy.sh"
        }
	}
}
