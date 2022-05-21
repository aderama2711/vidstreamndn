sudo mkdir /var/lib/nlsr

nfdc face create udp://10.0.0.49
sudo NDN_LOG='nlsr.*=DEBUG' nlsr -f nlsr-client4.conf