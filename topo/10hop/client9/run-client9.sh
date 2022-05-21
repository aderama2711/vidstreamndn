sudo mkdir /var/lib/nlsr

nfdc face create udp://10.0.0.69
sudo NDN_LOG='nlsr.*=DEBUG' nlsr -f nlsr-client9.conf