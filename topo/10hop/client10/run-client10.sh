sudo mkdir /var/lib/nlsr

nfdc face create udp://10.0.0.73
sudo NDN_LOG='nlsr.*=DEBUG' nlsr -f nlsr-client10.conf