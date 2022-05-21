sudo mkdir /var/lib/nlsr

nfdc face create udp://10.0.0.65
sudo NDN_LOG='nlsr.*=DEBUG' nlsr -f nlsr-client8.conf